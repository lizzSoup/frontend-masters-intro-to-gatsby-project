import * as React from 'react';
import { useState, useEffect } from 'react';

export default function TestPage() {
  const [theCurrentDate, setTheCurrentDate] = useState();

  useEffect(() => {
    const theDate = new Date();
    setTheCurrentDate(theDate.getHours() % 12);
  }, []);
  return <h1>{theCurrentDate ? theCurrentDate : null} </h1>;
}
