"use client"
import { useAmount } from '@/context/addMoneyContext'
import { clsx } from 'clsx'
import { useRouter } from 'next/navigation'

type AddMoneyAmountProps = {
    amount: number
    buttonDisabled?: boolean
}

const AddMoneyAmount = ({amount, buttonDisabled = false}: AddMoneyAmountProps) => {

    const {setAmount} = useAmount();
    console.log(amount);
    const router = useRouter();

    const handleSetAmount = (amount: number) =>{
      if(amount && amount > 0) {
        console.log(amount);
        setAmount(amount)
        buttonDisabled = false;
      }
     
    }

    const handleSelectAmount = () =>{
        router.push("/dashboard/add-money/card/amount/")
    }


  return (
    <section className="flex flex-col gap-5">
    <div className="bg-dark1 flex flex-col gap-3 rounded-[8px] px-6 py-4 md:px-8 md:gap-6 md:py-6">
      <h2 className="font-bold text-xl text-green pb-3 md:pt-5 md:text-2xl">
      ¿Cuánto querés ingresar a la cuenta?
      </h2>

      <div>
        <input 
        type='number'
        name='amount'
        value={amount}
        placeholder="$0"
        onChange={() => handleSetAmount(amount)}
        className="w-full h-[50px] p-5 text-left items-center text-dark1 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]"

       
        />
      </div>

      <div className="md:flex md:flex-col xl:flex-row md:gap-3 md:justify-between md:items-start xl:items-center xl:mt-5">
        
        <div className="hidden md:w-full xl:w-2/4 md:flex  md:h-[64px]  xl:justify-end md:items-center ">
          <button
           disabled= {buttonDisabled}
            onClick={handleSelectAmount}
            className="hidden md:block p-5 bg-select1 md:w-full xl:w-[233px] font-bold text-center items-center text-dark1 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>

    <div className="w-full h-[50px] flex justify-end md:hidden  ">
        <button
        disabled= {buttonDisabled}
        onClick={handleSelectAmount}
        className={clsx("w-1/2 h-[50px] flex p-5 font-bold text-center text-dark1 items-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] justify-center", {
          "bg-green": buttonDisabled === false,
          "bg-button1": buttonDisabled === true,
        })}
        >
          Continuar
        </button>
      </div>
  </section>
  )
}

export default AddMoneyAmount