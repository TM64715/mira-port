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
        const res = await axios.get('http://localhost:1337/articles?_sort=Published:desc');
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
    const year = date.getFullYear();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    return `${month} ${day}, ${year}`;
}
console.log(articles);
</script>
<Layout>
    <div class="space-y-14 flex flex-col mt-20 w-7/12 mx-auto mb-10">
        <h1 class="text-center text-2xl font-semibold">Hi I’m Mira Mehta.  Journalist, Activist, Student</h1>
        <p>My name is Mira Mehta, and I’m a senior at Westfield High School.  I believe that honest information and genuine communication will help us build a better future.  I hope to contribute to both through my writing, and below is a sampling.  I hope you enjoy it.</p>
        <p class="text-center">Here’s some of my published work</p>
    </div>
    {#if error != null}
        {error}
    {:else}
    <div class="flex w-11/12 mx-auto justify-around">
        {#each articles as article}
            <Card title={article.Title} date={article.Published} link={article.Link} blurb={article.Blurb}/>
        {/each}
    </div>
    {/if}
</Layout>