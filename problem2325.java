// https://leetcode.com/problems/decode-the-message/

import java.util.*;

class Solution {
    public String decodeMessage(String key, String message) {
        List<Character> charList = new ArrayList<Character>();
        char[] alphabet = { 
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' 
        };
        String newMessage = new String();

        for (int i = 0; i < key.length(); i++) {
            char letter = key.charAt(i);
            if (letter == ' ') continue;
            if (charList.indexOf(letter) == -1) charList.add(letter);
            if (charList.size() == 26) i = key.length();
        }

        for (int i = 0; i < message.length(); i++) {
            char letter = message.charAt(i);
            if (letter == ' ') newMessage += letter;
            else newMessage += alphabet[charList.indexOf(letter)];
        }
        
        return newMessage;
    }
}