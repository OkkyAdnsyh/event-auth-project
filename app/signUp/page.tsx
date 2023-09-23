import SignUp from "@/components/module/Form/SignUp"

const Page = () => {
  return (
    <>
      <div className={`w-full h-screen flex items-center justify-center`}>
        <div className={`w-[80%] h-auto flex items-center justify-center`}>
          <SignUp/>
        </div>
      </div>
    </>
  )
}

export default Page