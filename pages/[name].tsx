import DashboardLayout from "../layouts/dashboardLayout";
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from "next/router";
import { useGetcountryByNameQuery } from "./api/apiSlice";
import Image from 'next/image'

export default function CountryDetails() {
    const router = useRouter()
    const { name } = router.query
    
    const {
        data
    } = useGetcountryByNameQuery(name)
    // console.log("data", data)


    return (
        <DashboardLayout>
            <div className="mt-4">
                <button className="bg-white dark:bg-element-dark dark:text-light shadow-sm w-[8em] h-6 rounded-[2px] flex p-5 items-center justify-center" onClick={() => router.back()}>
                    <BsArrowLeft size={20} />
                    <span className="ml-3 font-semibold ">Back</span>
                </button>

                

                {data && (
                    <div className="flex w-full justify-between mt-10 dark:text-light">
                        {/* Flag */}
                <div className='w-6/12 h-3/5 object-fill'>
                  <Image src={data[0].flags.svg} alt="flag" className="w-full h-full" width={100} height={100} />  
                    </div>

                        {/* Country details */}
                    <div className="w-5/12">
                            <h1 className="my-6 text-[25px] font-bold">{data[0]?.name?.common}</h1>
                            
                            {/* more details */}
                        <div className="flex justify-between">
                            <div>
                                    <p className="font-semibold mb-2">Native Name: <span className=" font-normal">{(data[0]?.population).toLocaleString()}</span></p>
                                    <p className="font-semibold mb-2">Population: <span className="font-normal">{data[0]?.population}</span></p>
                                    <p className="font-semibold mb-2">Region: <span className="font-normal">{data[0]?.region}</span></p>
                                    <p className="font-semibold mb-2">Sub Region: <span className="font-normal">{data[0]?.subregion}</span></p>
                                    <p className="font-semibold mb-2">Capital: <span className="font-normal">{data[0]?.capital[0]}</span></p>

                                </div>
                                

                                <div>
                                    <p className="font-semibold mb-2">Top Level Domain: <span className="font-normal">{(data[0]?.population).toLocaleString()}</span></p>
                                    <p className="font-semibold mb-2">Currencies: <span className="font-[300]">{data[0]?.currencies?.ARS?.name}</span></p>
                                    <p className="font-semibold mb-2">Languages: <span className="font-[300]">{data[0]?.region}</span></p>

                                </div>
                            </div>
                            
                            <div className="flex mt-10 dark:text-">
                                <p className="font-semibold mb-2">Border Countries:</p>
                                {
                                    data[0]?.borders.map((border:any, i:any) => (
                                        <div key={i} className="bg-white dark:bg-element-dark shadow-sm rounded-[3px] w-28 h-8 ml-2 flex items-center justify-center">
                                            <p className="text-hi font-normal">{border}</p>
                                        </div>

                                    ))
                                }
                             </div>
                        </div>
                        

                    </div>
                )}
            </div>
        </DashboardLayout>    
    )
}