import scp from '../data/scp.json'



function MainContent()
{
    return(
        <main>
            {
                scp.map(

                    (scp) => (
                        <div className=' mt-5' key={scp.Subject}>
                            <h3>{scp.Subject}</h3>
                            <img className="images w-50 " src={"/images/" + scp.Image}  alt="Logo" />
                            <h2>{scp.Class}</h2>
                            <p className='w-50'>{scp.Description}</p>
                            <p className='w-50'>{scp.Containment}</p>
                        </div>
                    )
                )
            }
        </main>
    );
}

export default MainContent;