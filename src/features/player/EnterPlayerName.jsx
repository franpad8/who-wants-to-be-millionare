const EnterPlayerName = () => {
  const playerName = 'Franklin'

  return (
    <>
      <label htmlFor='enterPlayerName'>Enter Name:</label>
      <input id='enterPlayerName' type='text' value={playerName} />
    </>
  )
}

export default EnterPlayerName
