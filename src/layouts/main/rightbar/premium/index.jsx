import Button from "../../../../assets/components/button";

export default function Premium() {
  return (
    <section className=" mb-4 border rounded-2xl border-[color:var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5 ">
      <h6 className="text-[20px] font-bold leading-6">Premium'a abone olun</h6>
      <p className="text-[15px]">
        Yeni özelliklerin kilidini açmak için abone olun ve uygun olmanız
        durumunda reklam gelirinin bir kısmını alın.
      </p>
      <div className="self-start">
        <Button>Abone</Button>
      </div>
    </section>
  );
}
