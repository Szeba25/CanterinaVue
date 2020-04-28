<template>
    <div class="layout">
        <div>
            <img class="styled-picture choir-picture" src="@/assets/choir.jpg">
            <h2>Et harum quidem rerum facilis</h2>
            <p class="justified-text">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
            <p class="justified-text">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipiscivelit, sed quia non-numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipitlaboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui inea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non-provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <h4>Et harum quidem rerum facilis</h4>
            <p class="justified-text">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non-recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
        <div class="audio-container">
            <figure class="audio-item">
                <figcaption class="audio-caption">Music name 1:</figcaption>
                <audio controls>
                    <source src="test.mp3" type="audio/mpeg">
                </audio>
            </figure>
            <figure class="audio-item">
                <figcaption class="audio-caption">Music name 2:</figcaption>
                <audio controls>
                    <source src="test.mp3" type="audio/mpeg">
                </audio>
            </figure>
            <figure class="audio-item">
                <figcaption class="audio-caption">Music name 3:</figcaption>
                <audio controls>
                    <source src="test.mp3" type="audio/mpeg">
                </audio>
            </figure>
        </div>
        <!--
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/53002064&color=%23ff0000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/themostepicmusic" title="The Most Epic Music" target="_blank" style="color: #cccccc; text-decoration: none;">The Most Epic Music</a> · <a href="https://soundcloud.com/themostepicmusic/two-steps-from-hell-protectors" title="Two Steps From Hell -  Protectors of the Earth (Choir)" target="_blank" style="color: #cccccc; text-decoration: none;">Two Steps From Hell -  Protectors of the Earth (Choir)</a></div>
        -->

    </div>
</template>

<script>
export default {
    name: "AboutChoir"
}
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 20px;
    margin: 10px 25px 25px 25px;
}

.choir-picture {
    float: left;
    margin: 0px 25px 10px 0px;
    width: 538px;
    height: 318px;
}

.audio-container {
    display: block;
    margin: auto;
}

.audio-item {
    margin: 5px;
    float: left;
}

.audio-caption {
    margin: 0px 0px 0px 15px;
}
</style>
