export const Sidebar = () => {
  return (
    <nav className='md:block md:static md:rounded-none absolute  p-6 top-24 flex justify-between flex-col left-24 right-24  rounded-md bg-white  '>
      <p className='mb-4 font-bold text-graySecondary text-sm tracking-widest uppercase'>
        All boards (3)
      </p>
      <ul>
        <li className='grid gap-6'>
          <a className='flex gap-3' href=''>
            <img src='../assets/icon-board.svg' />
            <p className='font-semibold text-graySecondary'>Platform Launch</p>
          </a>
          <a className='flex gap-3' href=''>
            <img src='../assets/icon-board.svg' />
            <p className='font-semibold text-graySecondary'>Marketing plant</p>
          </a>
          <a className='flex gap-3' href=''>
            <img src='../assets/icon-board.svg' />
            <p className='font-semibold text-graySecondary'>Roadmap</p>
          </a>
          <a className='flex gap-3' href=''>
            <img src='../assets/icon-board.svg' />
            <p className='font-semibold text-mainPurple'>+ Create New Board</p>
          </a>
        </li>
      </ul>
      <div className='p-3 mt-6 flex justify-evenly bg-Light rounded'>
        <img className='cursor-pointer' src='../assets/icon-light-theme.svg' />

        <img className='cursor-pointer' src='../assets/icon-dark-theme.svg' />
      </div>
    </nav>
  );
};
