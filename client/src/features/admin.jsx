import React from 'react';
import HomeAdmin from './admin/mainadmin';
import Sidebar from './admin/components/common/sidebar';
function Admin() {
  return (
    <div>
      <Sidebar>
        <HomeAdmin />
      </Sidebar>
    </div>
  );
}
export default Admin;
