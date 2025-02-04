import { Card } from '@mui/material';
import React from 'react';

function Linstings({ dogs }) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#F4EFE7',
        marginTop: '150px',
        boxShadow: 'none',
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='566' preserveAspectRatio='none' viewBox='0 0 1440 566'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1914%26quot%3b)' fill='none'%3e%3crect width='1440' height='566' x='0' y='0' fill='rgba(244%2c 239%2c 231%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsG1916' transform='translate(0%2c 0)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1914'%3e%3crect width='1440' height='566' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cg id='SvgjsG1915'%3e%3cpath d='M6.038 10.472H10.08v3.613c0 0.594 0.479 1.073 1.073 1.073s1.066-0.479 1.066-1.073V10.472c0.322 0 0.358-0.207 0.358-0.451V7.323l-3.384-1.652H2.004l-0.923-0.526c-0.3-0.169-0.679-0.061-0.844 0.232a0.613 0.613 0 0 0 0.234 0.844l1.458 0.838v7.026a1.071 1.071 0 0 0 1.073 1.073c0.587 0 1.066-0.479 1.065-1.073v-2.754L6 14.607c0.309 0.508 0.966 0.673 1.467 0.372a1.073 1.073 0 0 0 0.372-1.466l-1.803-3.041z m3.484-5.538l3.047 1.452v-0.573h2.476l0.908-1.96L9.522 0.791v4.143z' fill-rule='evenodd'%3e%3c/path%3e%3c/g%3e%3cg id='SvgjsG1916'%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(0%2c 0) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(0%2c 145.6) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(0%2c 291.2) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(0%2c 436.79999999999995) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(145.6%2c 0) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(145.6%2c 145.6) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(145.6%2c 291.2) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(145.6%2c 436.79999999999995) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(291.2%2c 0) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(291.2%2c 145.6) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(291.2%2c 291.2) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(291.2%2c 436.79999999999995) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(436.79999999999995%2c 0) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(436.79999999999995%2c 145.6) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(436.79999999999995%2c 291.2) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(436.79999999999995%2c 436.79999999999995) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(582.4%2c 0) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(582.4%2c 145.6) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(582.4%2c 291.2) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(582.4%2c 436.79999999999995) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(728%2c 0) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(728%2c 145.6) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(728%2c 291.2) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(728%2c 436.79999999999995) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(873.5999999999999%2c 0) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(873.5999999999999%2c 145.6) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(873.5999999999999%2c 291.2) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(873.5999999999999%2c 436.79999999999995) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1019.1999999999999%2c 0) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1019.1999999999999%2c 145.6) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1019.1999999999999%2c 291.2) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1019.1999999999999%2c 436.79999999999995) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1164.8%2c 0) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1164.8%2c 145.6) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1164.8%2c 291.2) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1164.8%2c 436.79999999999995) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1310.3999999999999%2c 0) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1310.3999999999999%2c 145.6) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1310.3999999999999%2c 291.2) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1915' transform='translate(1310.3999999999999%2c 436.79999999999995) scale(2.6)' fill='rgba(233%2c 223%2c 210%2c 1)'%3e%3c/use%3e%3c/g%3e%3c/defs%3e%3c/svg%3e")`,
      }}
    >
      {dogs.map((dog) => (
        <Card
          key={dog.id}
          sx={{
            border: 'black solid 2px',
            width: '350px',
            height: '400px',
            margin: '20px',
            borderRadius: '25px',
            boxShadow: '7px 7px #000000',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img src={dog.img} alt={dog.name} style={{ objectFit: 'cover', width: '350px', height: '320px', borderRadius: '3px' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '700', fontSize: '26px' }}>{dog.name}</div>
            {dog.breed}, Age: {dog.age}, Zip: {dog.zip_code}
          </div>
        </Card>
      ))}
    </Card>
  );
}

export default Linstings;
