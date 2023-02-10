import Image from "next/image"
import classes from "./Hero.module.css"

function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image
                src="/images/site/jayant.png"
                alt="Picture of Jayant"
                width={300}
                height={300}
            />
        </div>
        <h1>Hi I am Jayant</h1>
        <p>I am a Full Stack web Developer</p>
    </section>
  )
}

export default Hero