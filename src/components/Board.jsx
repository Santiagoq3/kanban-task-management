export const Board = () => {
  return (
    <div className='flex items-center justify-center bg-Light w-full h-full m-h-[1000px] font-JakartaSans '>
      <div className='text-center mb-4'>
        <p className='text-graySecondary text-xl font-bold'>
          This board is empty. Create a new column to get started.
        </p>
        <button className='flex items-center m-auto bg-mainPurple p-3 mt-4 text-white rounded-3xl text-lg font-bold hover:bg-mainPurpleHover'>
          + Add New Column
        </button>
      </div>
    </div>
  );
};
