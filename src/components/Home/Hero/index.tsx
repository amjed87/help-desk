import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from '@/utils/util';

const Hero = () => {

    return (
        <section id="home-section" className='bg-slateGray'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center'>
                    <div className='col-span-6 flex flex-col gap-8 '>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Icon
                                icon="solar:verified-check-bold"
                                className="text-success text-xl inline-block me-2"
                            />
                            <p className='text-success text-sm font-semibold text-center lg:text-start'>منصة لتقديم الخدمات الخاصة بمديرية الاتصالات والنظم المعلوماتية </p>
                        </div>
                        <h1 className='text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0'>تستطيع الان الاطلاع على كافة خدمات مديرية الاتصالات والنظم المعلوماتية هنا  .</h1>
                        <h3 className='text-black/70 text-lg pt-5 lg:pt-0'>هذه المنصة موجهة الى مدراء مديريات واقسام وشعب النظم المعوماتية والاتصالات في تشكيلات الوزارة كافة .</h3>
                        
                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>طلب الخدمة</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>سرعة بالاستجابة</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>دعم فني</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>خدمات فنية متنوعة</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-6 flex justify-center items-center h-full py-16'>  
                        <Image src={`${getImagePrefix()}images/banner/moi-2.png`} alt="nothing" width={400} height={400} />
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Hero;
