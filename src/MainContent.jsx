import {scps} from './scp.js'

function MainContent(props)
{
     // Get the ProductID from props
     const {Subject} = props;

     // Find the product that matches the ProductID
     const Scp = scps.find(s => s.Subject === Subject);
 
    return(
        <div className=' p-4 mt-5'>
            <h3>{Scp.Subject}</h3>
            <img className="images w-50 " src={"/images/" + Scp.Image}  alt="Logo" />
            <h3>{Scp.Class}</h3>
            <p className='w-50'>{Scp.Description}</p>
            <p className='w-50'>{Scp.Containment}</p>
        </div>
       
    );
}

export default MainContent;