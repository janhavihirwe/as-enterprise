import React from 'react'
import SystemMaintenance from '../servicescontent/SystemMaintenance';
import ItConsulting from '../servicescontent/ItConsulting';
import Buyback from '../servicescontent/Buyback';
import Rentals from '../servicescontent/Rentals';
import Lenovo from '../servicescontent/Lenovo';
import Warranty from '../servicescontent/Warranty';
// import SystemMaintenance from '../servicescontent/SystemMaintenance';

function Content({serviceName}) {
    const renderComponent = () => {
        switch (serviceName) {
          case 'IT Consulting':
            return <ItConsulting/>;
          case 'System Maintenance':
            return <SystemMaintenance/>;
          case 'Buyback Services':
            return <Buyback/>;
          case 'System Rentals':
            return <Rentals/>;
          case 'Lenovo Products':
            return <Lenovo/>;
          case 'Warranty Plans':
            return <Warranty/>;
          default:
            return <div className="text-center p-10">Service not found</div>;
        }
      };
  return (
    <div>
        {renderComponent()}
        <div className='bg-[#000000] text-center text-[white] p-[60px]'>
            <div className='text-[30px] font-[700] leading-[36px]'>Need expert maintenance for your systems?</div>
            <div className='text-[20px] font-[400] leading-[28px] mt-[20px]'>Let our team of experts help you keep your technology running smoothly</div>
        </div>
    </div>
  )
}

export default Content