export const BASE_BUTTON_STYLES =
  'flex space-x-xs items-center justify-center duration-150 outline-none ring-offset-transparent focus-visible:outline-none'
export const BUTTON_STYLES = {
  default:
    'py-1.5 px-6 rounded-lg font-bold focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-fushia-500',
  primary:
    'bg-fushia-400 text-purple-200 hover:bg-fushia-300 active:bg-fushia-500 disabled:bg-purple-100 disabled:text-purple-400',
  secondary:
    'border-2 border-fushia-400 bg-transparent text-fushia-400 hover:border-fushia-400 hover:text-fushia-400 hover:bg-fushia-100 focus:ring-1 focus:ring-offset-0 active:border-fushia-400 active:text-fushia-400 active:bg-fushia-200 disabled:border-purple-400 disabled:text-purple-400',
  tertiary: 'text-fushia-400 hover:text-fushia-400 hover:bg-fushia-100 active:text-fushia-400 active:bg-fushia-200',
} as const
