import React from 'react'
import Button from './Button/Button'
type Props = {}

const RankGame = (props: Props) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="flex flex-col sm:align-center bg-zinc-100 p-6 h-screen items-center">
      <div>
        <div className='flex items-center mb-2'>
          <div className='bg-indigo-500 text-white w-fit rounded-full p-3 sm:text-2xl lg:text-4xl inline-flex'>
            <p>Blonde 👱‍♀️</p>
          </div>
          <p className='text-black text-2xl inline-flex font-black'>+</p>
          <div className='bg-red-500 text-white w-fit rounded-full p-3 sm:text-2xl lg:text-4xl inline-flex'>
            <p>fictional 🧜‍♀️</p>
          </div>
        </div>
        <div>
          <img 
          className='image object-cover h-96 w-full mb-2'
          src='https://celebrationspress.com/wp-content/uploads/2017/12/120417Rapunzel.jpg'/>
        </div>
        <div className="flex flex-row align-middle">
          <div className="mb-3 w-full">
            <select className="form-select form-select-lg
              appearance-none
              block
              w-full
              px-4
              py-2
              h-12
              text-xl
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
                <option selected>Rank 'Person Name'</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </select>
          </div>
          <Button
            variant="slim"
            type="button"
            className="block w-32 text-md font-semibold text-white text-center h-12"
            >
            submit
          </Button>
        </div>
      </div>
    </div>
</section>
  )
}