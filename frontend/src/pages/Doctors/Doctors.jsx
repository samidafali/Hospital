
import DoctorCard from './../../componnents/Doctors/DoctorCard';
import {doctors} from './../../assets/data/doctors';

const Doctors = () => {
  return <>
  <section className='bg-[#fff9ea]'>
    <div className="container text-center">
      <h2 className="heading">Find a doctor</h2>
      <div className="max-w-[570px]mt-[30px]mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
        <input type="search" className='py-4 pl-4 pr-2 ng-transparent w-full focus:outline-none
        cursor-pointer placeholder:text-textColor' placeholder='Search Doctor'/>
        <button className='btn mt-0 rounded-[0px] rounded-r-md'>
          Search
          </button>

      </div>
      </div>
  </section>
  <div className='container'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  </div>
  </> 
  };
   
  
export default Doctors