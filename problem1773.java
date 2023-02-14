// https://leetcode.com/problems/count-items-matching-a-rule/

import java.util.List;

class Solution {
    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {
        int count = 0;
        int key = (ruleKey.equals("type")) ? 0 : (ruleKey.equals("color")) ? 1 : 2;
        System.out.println(key);
        for (int i = 0; i < items.size(); i++) {
            if (items.get(i).get(key).equals(ruleValue)) count++; 
        }
        return count;
    }
}