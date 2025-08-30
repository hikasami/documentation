'use client';
import { cn } from '@/lib/cn';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { type SyntheticEvent, useEffect, useState, useTransition } from 'react';
import {
  Collapsible,
  CollapsibleContent,
} from 'fumadocs-ui/components/ui/collapsible';
import { cva } from 'class-variance-authority';
import { usePathname } from 'next/navigation';

const rateButtonVariants = cva(
  'inline-flex items-center gap-2 px-3 py-2 rounded-full font-medium border text-sm [&_svg]:size-4 disabled:cursor-not-allowed',
  {
    variants: {
      active_good: {
        true: 'text-fd-accent-foreground [&_svg]:fill-current hksm-bg-success hksm-border-success',
        false: 'text-fd-muted-foreground',
      },
      active_bad: {
        true: 'bg-fd-accent text-fd-accent-foreground [&_svg]:fill-current hksm-bg-destructive hksm-border-destructive',
        false: 'text-fd-muted-foreground',
      },
    },
  },
);

export interface Feedback {
  opinion: 'good' | 'bad';
  url?: string;
  message: string;
}

export interface ActionResponse {
  githubUrl: string;
}

interface Result extends Feedback {
  response?: ActionResponse;
}

export function Rate({
  onRateAction,
}: {
  onRateAction: (url: string, feedback: Feedback) => Promise<ActionResponse>;
}) {
  const url = usePathname();
  const [previous, setPrevious] = useState<Result | null>(null);
  const [opinion, setOpinion] = useState<'good' | 'bad' | null>(null);
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const item = localStorage.getItem(`docs-feedback-${url}`);

    if (item === null) return;
    setPrevious(JSON.parse(item) as Result);
  }, [url]);

  useEffect(() => {
    const key = `docs-feedback-${url}`;

    if (previous) localStorage.setItem(key, JSON.stringify(previous));
    else localStorage.removeItem(key);
  }, [previous, url]);

  function submit(e?: SyntheticEvent) {
    if (opinion == null) return;

    startTransition(async () => {
      const feedback: Feedback = {
        opinion,
        message,
      };

      void onRateAction(url, feedback).then((response) => {
        setPrevious({
          response,
          ...feedback,
        });
        setMessage('');
        setOpinion(null);
      });
    });

    e?.preventDefault();
  }

  const activeOpinion = previous?.opinion ?? opinion;

  return (
    <Collapsible
      open={opinion !== null || previous !== null}
      onOpenChange={(v) => {
        if (!v) setOpinion(null);
      }}
      className="border-y py-3"
    >
      <div className="flex flex-row items-center gap-2">
        <p className="text-sm font-medium pe-2">Как вам страница?</p>
        <button
          disabled={previous !== null}
          className={cn(
            rateButtonVariants({
              active_good: activeOpinion === 'good',
            }),
          )}
          onClick={() => {
            setOpinion('good');
          }}
        >
          <ThumbsUp />
          Хорошо
        </button>
        <button
          disabled={previous !== null}
          className={cn(
            rateButtonVariants({
              active_bad: activeOpinion === 'bad',
            }),
          )}
          onClick={() => {
            setOpinion('bad');
          }}
        >
          <ThumbsDown />
          Плохо
        </button>
      </div>
      <CollapsibleContent className="mt-3">
        {previous ? (
          <div className="px-3 py-6 flex flex-col items-center gap-3 bg-fd-card text-fd-muted-foreground text-sm text-center rounded-xl">
            <p>Спасибо за ваш отзыв!</p>
            <div className="flex flex-row items-center gap-2">
              <a
                href={previous.response?.githubUrl}
                rel="noreferrer noopener"
                target="_blank"
                className={cn(
                  buttonVariants({
                    color: 'primary',
                  }),
                  'text-xs',
                )}
              >
                Не получили ответ? Напишите нам!
              </a>

              <button
                className={cn(
                  buttonVariants({
                    color: 'secondary',
                  }),
                  'text-xs',
                )}
                onClick={() => {
                  setOpinion(previous.opinion);
                  setPrevious(null);
                }}
              >
                Отправить заново
              </button>
            </div>
          </div>
        ) : (
          <form className="flex flex-col gap-3" onSubmit={submit}>
            <textarea
              autoFocus
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded-lg bg-fd-secondary text-fd-secondary-foreground p-3 resize-none focus-visible:outline-none placeholder:text-fd-muted-foreground"
              placeholder="Оставьте ваш отзыв..."
              onKeyDown={(e) => {
                if (!e.shiftKey && e.key === 'Enter') {
                  submit(e);
                }
              }}
            />
            <button
              type="submit"
              className={cn(buttonVariants({ color: 'outline' }), 'w-fit px-3')}
              disabled={isPending}
            >
              Отправить
            </button>
          </form>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}