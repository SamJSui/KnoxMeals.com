import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function CreateFooter() {
    return (
    <MDBFooter bgColor='light' className='text-center'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://samjsui.github.io/'>
            Samuel Sui
        </a>
        </div>
    </MDBFooter>
    );
}

export default CreateFooter;