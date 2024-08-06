export default function formatLinks(links: string[]) {
    if (!links) {
        return <p>No recipes found! Please refine your search!</p>
    }

    return links.map((link) => {
        const split_link = link.split("/");
        let recipe_name = split_link[split_link.length - 1];
        if (recipe_name === '') {
            recipe_name = split_link[split_link.length - 2];
        }

        const formatted_recipe_name = recipe_name.split("-").map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        }).join(" ");

        return <p key={`${recipe_name}`}><a href={`${link}`}>{formatted_recipe_name}</a></p>;
    })
}