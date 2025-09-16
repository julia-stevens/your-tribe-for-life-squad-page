<script>
    export let member; // export prop   
    import defaultImg from "$lib/assets/default-avatar.jpg";
    import linkIcon from "$lib/assets/link-icon.svg"; 
</script>

<article class=vertical-layout>
    <div class="name">
        <h3>{member.name}</h3>
        <a href="/{member.id}">
            <img 
            src={linkIcon} 
            alt="Link icoon"
            class="link-icon">
        </a>
    </div>
    <div class="avatar">
        <img 
            src={member.avatar || defaultImg}
            alt="Avatar van {member.name}" 
            width="50" 
            height="50" 
            style="object-fit:cover;">
    </div>
</article>

<style>
    article {
        --b-radius-small: 5px; 
        display: flex; 
        flex-direction: column;
        border: 1px solid var(--primary-text);
        border-radius: var(--b-radius-small);
        box-shadow: 
            /* box shadow color */
            -5px 5px 1px var(--primary-highlight),
            /* box shadow border */
            -5px 5px 0 1px var(--primary-text)
        ;
        padding: 1rem 2rem;
        width: 190px; 
    }

    article .name {
        order: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    article .avatar {
        max-width: 189px;
        height: 190px;
        max-height: fit-content;
    }

    article .avatar img {
        width: 100%; 
        height: 100%;
        border-radius: var(--b-radius-small);
    }

    @media (min-width: 280px) {
        article .name {
            flex-direction: row;
        }
    }  

    article:hover {
        cursor: pointer;

        .link-icon { 
            animation: shake .2s ease-in 2;
        }
    }

    @keyframes shake {
        0%, 100% {
            rotate: 0deg;
            scale: 1;
        }    
        25% {
            rotate: 10deg;
            scale: 1.15;
        }
        50% {
            rotate: 0deg;
        }
        75% {
            rotate: -10deg;
        }
    }
</style>