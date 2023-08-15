import { Stack } from '@mui/material';
import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function DropdownComponent({setQuery}) {
  const options_status = [
    { value: 'online', label: 'Online' },
    { value: 'offline', label: 'Offline' },
    { value: null, label: 'Live Status' },
  ];
   
  const options_zone = [
    { value: 'ZONE_1', label: 'Zone 1' },
    { value: 'ZONE_2', label: 'Zone 2' },
    { value: 'ZONE_3', label: 'Zone 3' },
    { value: 'ZONE_4', label: 'Zone 4' },
    { value: 'ZONE_5', label: 'Zone 5' },
    { value: 'ZONE_6', label: 'Zone 6' },
    { value: 'ZONE_7', label: 'Zone 7' },
    { value: 'ZONE_8', label: 'Zone 8' }
  ];
  const options_connectvity = [
    { value: 'wifi', label: 'Wifi' },
    { value: 'ethernet', label: 'Ethernet' },
    { value: 'bluetooth', label: 'Bluetooth' }
  ];
  const options_mode = [
    { value: 'Day', label: 'Day' },
    { value: 'Night', label: 'Night' }
  ];
  const options_region = [
    { value: 'Day', label: 'Ernakulam' },
    { value: 'Night', label: 'Kochi' }
  ];
  const options_hub = [
    { value: 'Day', label: 'Kerala' },
    { value: 'Night', label: 'Tamil Nadu' }
  ];
  
  
  const defaultOptionStatus = 'Live Status';
  const defaultOptionZone = 'Zone Issues';
  const defaultOptionConn = 'Connectivity';
  const defaultOptionMode = 'Mode';
  const defaultOptionRegion = 'Region';
  const defaultOptionHub = 'Hub';
  
  const handleStatusChange = (selectedOption) => {
    console.log('Selected Status Option:', selectedOption);
    setQuery({key: 'CMS_status', value: selectedOption.value})
  };

  const handleZoneChange = (selectedOption) => {
    console.log('Selected Zone Option:', selectedOption);
    setQuery({key: selectedOption.value, value: 1})
  };

  return (
    <Stack direction='row' gap={3} padding={0} paddingBottom={0} width='100%'>
      <div style={{ flex: 1 }}>
        <Dropdown
          options={options_status}
          onChange={handleStatusChange}
          value={defaultOptionStatus}
          placeholder="Select an option"
        />
      </div>
      <div style={{ flex: 1  }}>
        <Dropdown
          options={options_zone}
          onChange={handleZoneChange}
          value={defaultOptionZone}
          placeholder="Select an option"
        />
      </div>
      <div style={{ flex: 1  }}>
        <Dropdown
          options={options_connectvity}
          onChange={handleZoneChange}
          value={defaultOptionConn}
          placeholder="Select an option"
        />
      </div>
      <div style={{ flex: 1  }}>
        <Dropdown
          options={options_mode}
          onChange={handleZoneChange}
          value={defaultOptionMode}
          placeholder="Select an option"
        />
      </div>
      <div style={{ flex: 1  }}>
        <Dropdown
          options={options_region}
          onChange={handleZoneChange}
          value={defaultOptionRegion}
          placeholder="Select an option"
        />
      </div>
      <div style={{ flex: 1  }}>
        <Dropdown
          options={options_hub}
          onChange={handleZoneChange}
          value={defaultOptionHub}
          placeholder="Select an option"
        />
      </div>
    </Stack>
  );
}

export default DropdownComponent;
