
function Gateway() {

  return (
    <div className="h-full items-end flex flex-col justify-between">
      <div className="text-sm">
          <div className="font-semibold text-xl">
            **Disclaimer**
          </div>
          <br />
          <ul style={
            {
              "listStyleType":"disc"
            }
          }
            className="ml-1 space-y-4"
          >
            <li>
              Once you have completed the payment you would <b className="font-bold"> not be able to update the details you have provided later on. </b>
              <br /><br />
              Therefore we recommend you to <b className="font-bold"> review your form </b> before proceeding with the payment.
            </li>
            <li>
              We have a Strict <b className="font-bold"> No Refund Policy. </b>
            </li>
          </ul>
      </div>
      <button className="px-10 py-3 bg-green-500 rounded-md hover:bg-green-600">
        Proceed to Pay
      </button>
    </div>
  )
}

export default Gateway
