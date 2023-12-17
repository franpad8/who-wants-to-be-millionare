import Box from '../ui/Box'
import Button from '../ui/Button'

export function NotFound () {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <Box className='text-3xl py-5'>Page Not found</Box>
      <Button to='/'>Go to Menu</Button>
    </div>
  )
}
