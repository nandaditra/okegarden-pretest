import Header from "./Header"

const Main = () => {
    const hari = [
        "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"
    ]

    const angkaHari = [
        "", "","","1","2","3","4",
        "5", "6","7","8","9","10","11",
        "12", "13","14","15","16","17","18",
        "19", "20","21","22","23","24","25",
        "26", "27","28","29","30","31","",
    ]

    const waktu = [
        "09.00", "13.00", "10.00", "14.00", "11.00", "15.00", "12.00", "16.00"
    ]

    const estimasi = [
        "<10m2",
        "11-20m2",
        "21-30m2",
        "31-40m2",
        "41-50m2",
        "51-60m2",
        ">100m2",
    ]

    return (
        <div>
            <Header />
            <main className="container mx-auto px-5 sm:px-10 md:px-20">
                <div className="text-center py-24">
                   <h1 className="text-4xl font-bold font-sans text-black">Konsultasi Taman</h1>
                   <p className="font-semibold font-serif text-gray text-xl py-7">klik dibawah ini untuk memilih tanggal & waktu yang tersedia untuk memanggil konsultan kami</p>
                </div> 

                <div className="grid grid-cols-11 gap-9 ">
                    <div className="bg-white col-span-11 sm:col-span-11 md:col-span-5 rounded-lg border-2 border-neutral">
                        <div className="p-12">
                            <div className="grid grid-cols-5 gap-4">
                                <h4 className="font-bold text-2xl text-[#333333] ml-4 font-sans pb-10 text-start col-span-3">October 2022</h4>
                                <div className="col-span-2 mr-2 text-right">
                                   <button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#4d4d4d" stroke="#4d4d4d" strokeWidth="3.9" version="1.1" viewBox="0 0 100 100" xmlSpace="preserve"><path d="M33.934 54.458l30.822 27.938a1.996 1.996 0 002.826-.138 1.999 1.999 0 00-.139-2.824l-29.642-26.87L64.67 22.921a1.998 1.998 0 10-2.963-2.685L33.768 51.059a1.994 1.994 0 00-.475 1.723 1.988 1.988 0 00.641 1.676z"></path></svg></button>
                                   <button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#4d4d4d" stroke="#4d4d4d" strokeWidth="3.9" transform="scale(-1 1)" version="1.1" viewBox="0 0 100 100"xmlSpace="preserve"><path d="M33.934 54.458l30.822 27.938a1.996 1.996 0 002.826-.138 1.999 1.999 0 00-.139-2.824l-29.642-26.87L64.67 22.921a1.998 1.998 0 10-2.963-2.685L33.768 51.059a1.994 1.994 0 00-.475 1.723 1.988 1.988 0 00.641 1.676z"></path></svg></button>
                                </div>
                            </div>
                            <div className="">
                                <div className="grid grid-cols-7 gap-3 text-center">
                                    {hari.map((hr, index)=> 
                                       <div className="font-bold text-[#333333] text-xl p-1" key={index}>
                                          {hr}
                                       </div>
                                    )}

                                    {angkaHari.map((day, index)=> 
                                       <button 
                                          className="focus:bg-blue focus:text-white text-gray hover:text-white py-4 text-xl hover:bg-blue rounded-full focus:ring-4 " 
                                          key={index}>
                                          <b className="font-bold">{day}</b>
                                       </button>
                                    )}
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-white col-span-11 md:col-span-6 rounded-lg border-2 border-neutral">
                           <div className="text-center px-16 py-10">
                                <div className="">
                                    <h3 className="font-bold text-black font-sans text-2xl pb-1">Thursday</h3>
                                    <p className="font-bold text-lg text-gray font-sans">October 8, 2022</p>
                                </div>
                                
                                <div className="my-7 text-start text-left">
                                    <h4 className="font-bold text-black text-xl text-serif">Pilih Waktu</h4>
                                    <p className="text-lg text-gray font-sans my-2">Durasi Konsultan 30 Menit</p>
                                </div>
                                
                                <p></p>
                                <div className="mb-10">
                                    <div className="grid grid-cols-2 gap-5">
                                      {waktu.map((wkt, index) => 
                                         <button 
                                              className="focus:bg-sky font-bold py-3 border text-blue text-serif text-lg hover:bg-sky border-gray rounded-lg"
                                              key={index}>
                                            {wkt}
                                         </button> 
                                      )}  
                                    </div> 
                                </div>
                            </div>
                        </div>
                </div>

                <div className="bg-white rounded-lg mt-12 border-2 border-neutral mb-40">
                    <div className="mx-12 md:mx-24 pt-12 md:pt-24">
                            <h1 className="text-4xl font-bold text-sans text-black">Informasi Data Diri</h1>

                            <form>
                                <div className="grid grid-cols-10 gap-4 w-100 my-10">
                                    <div className="col-span-10 md:col-span-4">
                                        <label 
                                           className="font-bold text-gray"
                                           htmlFor="Nama Lengkap">
                                             Nama Lengkap
                                        </label><br/>
                                        <input 
                                        className="bg-slate w-full mt-3 rounded-lg border-none focus:ring-2 focus:ring-green"
                                        name="nama-lengkap"
                                        type="text"
                                        placeholder="Yudha Wahyu"
                                        />
                                    </div>
                                    <div className="col-span-10 md:col-span-4">
                                        <label
                                           className="font-bold text-gray" 
                                           htmlFor="No Hp">
                                            No Hp
                                        </label><br/>
                                        <input 
                                            className="bg-slate w-full mt-3 rounded-lg border-none focus:ring-2 focus:ring-green"
                                            name="no-hp"
                                            type="text"
                                            placeholder="+62 852 2324 4747"
                                        />
                                    </div>
                                </div>

                            </form>

                            <div className="grid grid-cols-12 gap-2 mb-40">
                                    <div className="col-span-12 sm:col-span-12 md:col-span-1">
                                       <h5 className="font-bold text-gray mr-3">Alamat</h5>
                                    </div>
                                    
                                    <div className="col-span-12 sm:col-span-12 md:col-span-10 w-3/5 h-28 p-5 border-2 border-green rounded-lg focus:ring-1 focus:ring-green relative">
                                        <textarea
                                          className="w-full p-1 border-none rounded-lg focus:ring-1 focus:ring-white"
                                          name="alamat"
                                          type="text"/>
                                        <span className="text-green mr-3 underline absolute bottom-1 right-0">Tambah Alamat</span>
                                    </div>                        
                            </div>
                        </div>
                        <hr className="border-neutral"/>
                        <div className="mx-16 my-16">
                             <h1 className="text-4xl font-bold text-sans text-black">Informasi Konsultasi Taman</h1>
                             
                             <h3 className="text-black font-bold font-sans text-xl mt-8 mb-3">Lahan Taman</h3>
                             <p className="font-serif text-gray text-[16px]">Pilih jumlah lahan taman yang akan dibuat</p >

                             <ul className="flex flex-wrap gap-4 mt-4 mb-16">
                                <button className="border-2 border-green hover:bg-green rounded-lg text-green  hover:text-white focus:bg-green focus:text-white font-bold p-4 mr-4 focus:ring-2 focus:ring-dark-200">1 Lahan Taman</button>
                                <button className="border-2 border-green hover:bg-green rounded-lg text-green hover:text-white focus:bg-green focus:text-white font-bold p-4 mr-4 focus:ring-2 focus:ring-dark-200">2 Lahan Taman</button>
                                <button className="border-2 border-green hover:bg-green rounded-lg text-green hover:text-white focus:bg-green focus:text-white font-bold p-4 mr-4 focus:ring-2 focus:ring-dark-200">Lebih dari 2 Lahan Taman</button>
                             </ul>

                             <h4 className="text-black font-bold text-sans text-xl mt-8">Tema Taman</h4>
                             <p className="text-serif text-gray text-[16px] my-4">Pilih tema taman yang akan dibuat</p>

                             <div className="w-full md:w-8/12 bg-yellow rounded-lg">
                                 <p className="justify-self-center text-lg w-full font-sans font-semibold text-gray py-2 px-2"><b className="font-bold">Catatan : </b>Jika anda belum memiliki inspirasi tema taman maka anda bisa melewati tahapan ini, konsultan kami akan memberikan rekomendasi terbaik untuk taman anda</p>
                             </div>

                             <div className="block grid grid-cols-3 gap-7 mt-12">
                                 <div className="col-span-3 md:col-span-1 border-2 border-teal rounded-lg relative">
                                     <img 
                                        className="rounded-t-lg "
                                        src="https://cdn.pixabay.com/photo/2013/04/03/21/44/warsaw-100294_960_720.jpg" 
                                        alt="warsaw-100294_960_720.jpg"
                                        />
                                     <div className="m-6 mb-16">
                                        <h3 className="text-black font-bold font-serif text-xl">Taman Minimalis</h3>
                                        <p className="font-sans text-[17px] text-gray my-0">Taman yang indah dilahan yang sempit.</p>
                                     </div>
                                     <p className="text-green underline underline-offset-8 text-end mr-4 font-bold absolute bottom-5 right-2">Pilih</p>
                                 </div>
                                 <div className="col-span-3 md:col-span-1 border-2 border-teal rounded-lg relative">
                                    <img 
                                      className="rounded-t-lg "
                                      src="https://cdn.pixabay.com/photo/2013/02/16/03/10/yanoda-82137_960_720.jpg" 
                                      alt="yanoda-82137_960_720.jpgg"/>

                                    <div className="m-6 mb-16">
                                        <h3 className="text-black font-bold text-serif text-xl">Taman Kering</h3>
                                        <p className="text-sans text-[17px] text-gray my-0">Taman yang dirancang untuk menghasilkan suasana alam didalam dan diluar rumah</p>
                                    </div>        

                                    <p className="text-green underline underline-offset-8 text-end mr-4 pt-4 font-bold absolute pt-4 bottom-5 right-2">Pilih</p>
                                 </div>
                                 
                                 <div className="col-span-3 md:col-span-1 border-2 border-teal rounded-lg relative">
                                     <img 
                                       className="rounded-t-lg "
                                       src="https://cdn.pixabay.com/photo/2012/12/18/04/40/nature-70567_960_720.jpg" 
                                       alt="nature-70567_960_720.jpg"/>

                                     <div className="m-6">
                                         <h3 className="text-black font-bold text-serif text-xl">Taman Tropis</h3>
                                         <p className="text-sans text-[17px] text-gray my-0">Taman yang paling sesuai dengan iklim di indonesia</p>
                                     </div>
                                     <p className="text-green underline underline-offset-8 text-end mr-4 font-bold absolute pt-4 bottom-5 right-2 ">Pilih</p>
                                 </div>
                             </div>

                             <div className="mt-12 pb-48">
                                <h4 className="font-bold text-sans text-black text-xl">Estimasi Ukuran Taman</h4>

                                <ul className="grid grid-cols-9 gap-4 mt-4">
                                    {estimasi.map((est, index)=>
                                       <button 
                                          key={index}
                                          value={est}
                                          className="focus:bg-green focus:text-white focus:ring-4 focus:ring-gray-200 col-span-1 py-1.5 font-bold hover:bg-green  text-lg text-green hover:text-white text-center border-2 border-green rounded-lg ">
                                            {est}
                                          </button>
                                    )}
                                </ul>        
                             </div>

                             <div className="text-right font-bold">
                                 <button className="bg-slate  py-2 px-4 text-green rounded-lg focus:ring-4 focus:ring-dark-200 mr-5">Batal</button>
                                 <button className="bg-green py-2 px-4 text-white rounded-lg focus:ring-4 focus:ring-dark-200">OKE</button>
                             </div>
                        </div>
                </div>

            </main>
        </div>
    )

}

export default Main;