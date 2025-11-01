'use client';

import Spot from './spot';
import Features from './features';
import Cources from './courses';
import Said from './said';

export default function Index() {
  return (
    <div className="w-[100%] m-auto flex flex-col ">
      <Spot></Spot>
      <Features></Features>
      <Cources></Cources>
      <Said></Said>
    </div>
  );
}
