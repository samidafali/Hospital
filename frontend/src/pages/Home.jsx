import  heroImg01 from '../assets/images/hero-img01.png'
import  heroImg02 from '../assets/images/hero-img02.png'
import  heroImg03 from '../assets/images/hero-img03.png'


const Home = () => {
    return (
      <>
        <section className="hero__section pt-[60px] 2x1:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life
                </h1>
                <p className="text__para">
                  Établissement public ou établissement privé ayant passé certaines conventions avec l'État et où peuvent être admis tous les malades pour y être traités.
                </p>
                <button className="btn">Demander un rendez-vous</button>
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">+15</h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of experience</p>
                </div>
              </div>
              </div>
                <div className="flex gap-[30px] justify-end">
                    <div>
                        <img className='w-full' src={heroImg01} alt="" />
                    </div>
                    <div className='mt-[30px]'>
                            <img src={heroImg02} className="w-full mb-[30px]" />
                            <img src={heroImg03}  className='w-full' />
                    </div>
                </div>
             
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Home;
  