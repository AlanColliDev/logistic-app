import Stepper from '../../components/Stepper';
import TitleComponent from '../../components/TitleComponent';
import { CombustibleProvider } from '../../context/Logistica';

export default function Combustible() {
   return (
      <>
         <TitleComponent Title='CAPTURAR COMBUSTIBLE' />
         <div className="flex flex-wrap">
            <div className="w-full">
               <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                  <div className="flex-auto px-4 py-10 pt-10 justify-center items-center">
					      <CombustibleProvider>
                        <Stepper />
                     </CombustibleProvider>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
