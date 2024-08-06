// pages/index.js

import { useState } from 'react' 

function Loader() {

    const [loading, setLoading] = useState(false);

    let content;
    if (loading) {
      content = <Loader />;
    } else {
      content = <Data />;
    }
  
    return (
      <div>{content}</div>
}

export default Loader