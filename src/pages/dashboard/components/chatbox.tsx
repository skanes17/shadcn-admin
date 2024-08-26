import dayjs from 'dayjs'
import { Button } from '@/components/custom/button'
import {
  IconPlus,
  IconPhotoPlus,
  IconPaperclip,
  IconSend,
} from '@tabler/icons-react'
import { cn } from '@/lib/utils'

const dummyMessages = [
  {
    sender: 'You',
    timestamp: '2023-10-01T10:00:00Z',
    message: 'Hello Mansell, can you help me with my game stats?',
  },
  {
    sender: 'Mansell',
    timestamp: '2023-10-01T10:01:00Z',
    message:
      'Hello! I am here to help. What specific stats are you looking for?',
  },
  {
    sender: 'You',
    timestamp: '2023-10-01T10:02:00Z',
    message: 'I want to know my highest score and my average score.',
  },
  {
    sender: 'Mansell',
    timestamp: '2023-10-01T10:03:00Z',
    message:
      'Sure! Your highest score is 2500 points and your average score is 1800 points.',
  },
  {
    sender: 'You',
    timestamp: '2023-10-01T10:04:00Z',
    message: 'Thanks! Can you also tell me how many games I have played?',
  },
  {
    sender: 'Mansell',
    timestamp: '2023-10-01T10:05:00Z',
    message: 'You have played a total of 50 games.',
  },
  {
    sender: 'You',
    timestamp: '2023-10-01T10:06:00Z',
    message: 'Great! Thank you for the information.',
  },
  {
    sender: 'Mansell',
    timestamp: '2023-10-01T10:07:00Z',
    message: 'You are welcome! If you need any more help, feel free to ask.',
  },
]

export default function ChatComponent() {
  return (
    <div className='pr-2'>
      <div className='chat-text-container relative -mr-4 flex flex-1 flex-col overflow-y-hidden'>
        <div className='chat-flex flex max-h-64 w-full flex-grow flex-col-reverse justify-start gap-2 overflow-y-auto p-2'>
          {dummyMessages.map((msg, index) => (
            <div
              key={`${msg.sender}-${msg.timestamp}-${index}`}
              className={cn(
                'chat-box max-w-72 break-words px-3 py-2 shadow-lg',
                msg.sender === 'You'
                  ? 'self-end rounded-[16px_16px_0_16px] bg-primary/85 text-primary-foreground/75'
                  : 'self-start rounded-[16px_16px_16px_0] bg-secondary'
              )}
            >
              {msg.message}{' '}
              <span
                className={cn(
                  'mt-1 block text-xs font-light italic text-muted-foreground',
                  msg.sender === 'You' && 'text-right'
                )}
              >
                {dayjs(msg.timestamp).format('h:mm a')}
              </span>
            </div>
          ))}
        </div>
      </div>
      <form className='flex w-full flex-none gap-2 pt-4'>
        <div className='flex flex-1 items-center gap-2 rounded-md border border-input px-2 py-1 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring lg:gap-4'>
          <label className='flex-1'>
            <span className='sr-only'>Chat Text Box</span>
            <input
              type='text'
              placeholder='Ask about your results...'
              className='h-8 w-full bg-inherit focus-visible:outline-none'
            />
          </label>
          <Button variant='ghost' size='icon' className='hidden sm:inline-flex'>
            <IconSend size={22} />
          </Button>
        </div>
        <Button
          className='h-full sm:hidden'
          rightSection={<IconSend size={18} />}
        >
          Send
        </Button>
      </form>
    </div>
  )
}
