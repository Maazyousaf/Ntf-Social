const token = ({text}) => {
  return (
    <div className="border-gradient p-4 flex items-center bg_card">
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 p-0.5 rounded-full w-4 gradient-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
        <h3 className="text-base font-medium ml-2 truncate text-white">
          {text}
          </h3>
    </div>
  );
};

export default token;
