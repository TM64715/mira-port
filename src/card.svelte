<script>
    export let title ="Seize the Moment -- Act Now on Global Fragility";
    export let date = "September 9, 2020";
    export let link = "https://www.tapinto.net/towns/westfield/sections/op-ed-westfield/articles/opinion-seize-the-moment-act-now-on-global-fragility";
    export let blurb = "As the beginning of the decade reveals itself to be an accumulation of 1920s tragedies rather than a time replete with the splendor of Gatsby-esque parties, Americans have not only united to support thei…";
</script>

<div class="border-1t pt-3 pb-5 w-full">
    <div class="flex flex-col mx-4 px-3 space-y-5">
        <span class="grid grid-cols-5 pt-4 w-full">
            <p class="text-blue-600 text-opacity-95 col-span-3 text-base font-semibold hover:underline"><a href={link}>{title}</a></p>
            <p class="text-black opacity-80 col-start-4 w-full col-span-2 text-right">{date}</p>
        </span>
        <p class="line-clamp-3">{blurb}</p>
        <span class="px-4 py-2 inline-flex self-end text-sm font-semibold rounded-full bg-blue-100 bg-opacity-50 ">
            <a href="{link}" class="text-blue-800">Read More!</a>
        </span>
    </div>
</div>