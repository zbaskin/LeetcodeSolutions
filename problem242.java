// https://leetcode.com/problems/valid-anagram/

import java.util.Map;
import java.util.HashMap;

class Solution {
    public void updateMap (String word, Map<Character, Integer> map) {
        for (int i = 0; i < word.length(); i++) {
            char character = word.charAt(i);
            if (!map.containsKey(character)) {
                map.put(character, 1);
            } else {
                int letterCount = map.get(character);
                map.put(character, letterCount + 1);
            }
        }
    }

    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> sMap = new HashMap<Character, Integer>();
        Map<Character, Integer> tMap = new HashMap<Character, Integer>();
        
        updateMap(s, sMap);
        updateMap(t, tMap);

        return sMap.equals(tMap);
    }
}