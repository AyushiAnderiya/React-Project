function Card({username,background}){
    return(
        <div className="mx-auto rounded-xl ">
    <div class="relative h-[400px] w-[300px] rounded-md ">
    <img
      src={background}
      alt="A"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left">
      <h1 class="text-lg font-semibold text-white">{username}</h1>
      <p class="mt-2 text-sm text-gray-300">
      Meet {username}, a skilled web developer breaking barriers in the digital realm. <br />
              With a flair for design and coding finesse
      </p>
      <button class=" mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
        View Profile →
      </button>
    </div>
  </div>
   
  </div>
 
    );
}

export default Card;