import { Notice } from 'obsidian';

const fs = require("fs");


/**
 * Creates a Mochi card deck string from an array of card data.
 * Each card's content is joined with a delimiter and formatted into a Mochi card structure.
 * The deck is named after the basename of the active file in the workspace.
 *
 * @param cards - An array of card fields, where each card is an array of strings.
 * @returns A Promise that resolves to a string representing the Mochi card deck.
 */
export async function createMochiCards(cards: CardFields[]): Promise<string> {
    let deckName = this.app.workspace.getActiveFile()!.basename

    let mochiCard = "{:decks [{";
    mochiCard += ":name " + JSON.stringify(deckName) + ",";
    mochiCard += ":cards (";

    for (let i = 0; i < cards.length; i++) {
        // Join the fields of each card with the delimiter
        const cardContent = cards[i].join('\n---\n');

        mochiCard +=
            "{:content " +
            JSON.stringify(cardContent) +
            "}";
        // Add comma separator between cards, except after the last card
        if (i < cards.length - 1) {
            mochiCard += ",";
        }
    }

    mochiCard += ")";
    mochiCard += "}]";
    mochiCard += ", :version 2}";

    return mochiCard;
}


/**
 * Asynchronously writes a Uint8Array to a file at the specified path.
 * Displays a notice upon success or error.
 *
 * @param path - The file path where the data should be written.
 * @param file - The Uint8Array containing the data to be written to the file.
 */
export async function saveFile(
    path: string,
    file: Uint8Array,
) {
    fs.writeFile(path, file, (error: any) => {
        if (error) {
            console.log(error);
            new Notice("Error writing file");
        } else {
            new Notice("Success writing file!");
        }
    });
}


/**
 * Parses a string containing card data into a two-dimensional array.
 * 
 * The function expects the input string to contain multiple cards,
 * each separated by "<!---->". Each card is further divided into components,
 * split by "---" or "***". The function returns an array of arrays,
 * where each inner array represents a card and its components.
 * 
 * @param input - The string containing the card data.
 * @returns A Promise that resolves to a two-dimensional array.
 * Each inner array contains the components of a single card.
 */
export async  function parseCardData(input: string): Promise<string[][]> {
    const cards = input.split("<!---->").filter(card => card.trim() !== "");

    return cards.map(card => {
        return card.split(/---|\*\*\*/).map(part => part.trim()).filter(part => part !== "");
    });

}