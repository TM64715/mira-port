<script>
import Layout from "../layout.svelte";
import Card from '../card.svelte';
const cms = "http://localhost:1337/"
import axios from 'axios';
import { onMount } from "svelte";
let  articles = []
let error = null;
onMount(async () => {
    try {
        const res = await axios.get('https://boiling-fortress-16746.herokuapp.com/articles?_sort=Published:desc');
        articles = res.data;
    } catch (e) {
        error = e;
    }
})
const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}
const formatDate = (date) => {
    date = new Date(date);
    const year = date.getFullYear();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    return `${monthName} ${day}, ${year}`;
}
console.log(articles);
</script>
<Layout>
    
    <span class="flex w-11/12 justify-between mt-10 mx-auto">
        <div class="border-1t rounded-full w-12 h-12 flex justify-center items-center ring ring-blue-600">
            M
        </div>
        <button class="focus:outline-none bg-gray-300 text-sm rounded-lg font-medium px-5 focus:ring-2 ring-black bg-opacity-40">
            <a href="mailto:itsmiramehta@gmail.com" target="blank">Contact Me</a>
        </button>
    </span>
    <div class="space-y-5 md:space-y-14 flex flex-col mt-10 w-10/12 md:w-7/12 mx-auto mb-10">
        
        <h1 class="text-center text-2xl font-semibold">Hi I’m Mira Mehta,  Journalist, Activist, Student</h1>
        <p>My name is Mira Mehta, and I’m a senior at Westfield High School.  I believe that honest information and genuine communication will help us build a better future.  I hope to contribute to both through my writing, and below is a sampling.  I hope you enjoy it.</p>
        <p class="text-center font-medium">Here’s some of my published work</p>
    </div>
    {#if error != null}
        {error}
    {:else}
    <div class="flex flex-col w-11/12 mx-auto space-y-4">
        <div class="md:grid md:grid-cols-2 gap-10 auto-rows-auto space-y-4 md:space-y-0">
            {#each articles as article, i}
                <Card title={article.Title} date={formatDate(article.Published)} link={article.Link} blurb={article.Blurb}/>
            {/each}
        </div>
    </div>
    {/if}
</Layout>