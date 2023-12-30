import './about.css';
const About = () => {
    return <>
    <section className="flex justify-center text-center bg-white dark:bg-gray-900">
        <h2 className="text-4xl text-white m-20">About us!</h2>
    </section>
    <section className="main flex flex-row justify-center m-40">
        <div className="box">
            <div className='flex flex-row'>
            <img className='headshot' src='https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/3690ca61-6a9d-4c93-a2a5-83a5f2aa1648/2022-08-16-Trinet-0540-Martinez-Juan.jpg'/>
            <div className='flex flex-col mt-4 ml-6 text-center'>
            <h3 className='text-xl font-bold'>Shahzain Shafique</h3>
            <h3 className='text-xl'>CEO</h3>
            </div>
            </div>
            <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        </div>
        <div className='content'>
            <div className='flex flex-col ml-10 justify-center align-middle mt-10'>
                <h3 className='text-4xl font-serif'>A better team</h3>
                <h3 className='mt-2 text-3xl text-blue-700 font-bold ser'>with great services</h3>
            </div>
        </div>
    </section>
    </>;
}
 
export default About;