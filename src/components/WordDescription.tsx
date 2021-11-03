import { hasAVowel } from "../utils/hasAVowel";
 import { isInputStrong } from "../utils/isInputStrong";

 interface WordDescriptionProps {
   wordToDescribe: string;
 }

 function WordDescription({
   wordToDescribe,
 }: WordDescriptionProps): JSX.Element {
   const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
   const containsAVowel = hasAVowel(wordToDescribe);
   const hasTheLetterQ = wordToDescribe.toLowerCase().match("q");
   const hasSpecialCharacter = wordToDescribe.toLowerCase().match(/[!?£]/g);
   const checkStrength = isInputStrong(wordToDescribe);

   return (
     <ul>
       {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
       {containsAVowel && <li>Contains a vowel</li>}
       {hasTheLetterQ && <li>Contains the letter Q</li>}
       {hasSpecialCharacter && (
         <li>Contains a special character(! or ? or £)</li>
       )}
       {checkStrength ? <li>Impressively strong input!</li> : ""}
     </ul>
   );
 }

 export default WordDescription;