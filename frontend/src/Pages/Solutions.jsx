
const Solution = () => {
  return (
    <div className="flex flex-row justify-center mx-10 gap-4 py-20">
      <div className="flex flex-col gap-4 w-1/3">
      <h1>Your Title Here</h1>
      <p>Your additional content can be added here.</p>
      </div>
      <div className="flex flex-col gap-4 w-2/3">
      <p>Your content goes here.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <p>Additional paragraph for more information.</p>
      </div>
    </div>
    )
}

export default Solution