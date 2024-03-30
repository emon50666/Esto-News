import { RingLoader,  } from "react-spinners";

const Loder = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen pt-96 ">
            <RingLoader size ={100} color={'#F92FD3'} ></RingLoader>
            
        </div>
    );
};

export default Loder;