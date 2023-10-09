<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is B: ReferenceError: greetign is not defined ?

<i><b>Explanation here</b></i>
<li>The code attempts to access a variable named "greetign," which is not defined.</li>
<li>As a result, a ReferenceError is thrown because the variable "greetign" is not declared or assigned a value before being used.<li>
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is D: 3.?

<i><b>Explanation here</b></i>
<li>The function "sum" attempts to add the values of its parameters "a" and "b."</li>
<li>JavaScript implicitly converts the string "2" to a number when performing the addition, resulting in 1 + 2, which equals 3.</li>
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is A: ['🍕', '🍫', '🥑', '🍔'].?

<i><b>Explanation here</b></i>
<li>The code modifies the "info.favoriteFood" property to "🍝," but it doesn't affect the "food" array.</li>
<li>So, when you log the "food" array, it remains unchanged, and its contents are still ['🍕', '🍫', '🥑', '🍔'].</li>
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is B: Hi there, undefined.

<i><b>Explanation here</b></i>
<li>The function "sayHi" expects a "name" parameter, but it's called without an argument.</li>
<li>When called without an argument, "name" becomes undefined, resulting in "Hi there, undefined" being returned.</li>
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is B: 2. ?

<i><b>Explanation here</b></i>
<li>The forEach loop iterates over each element in the nums array.</li>
<li>The condition if (num) evaluates to true for all elements except 0, so count is incremented for each non-zero element, resulting in 2 being logged.</li>

</p>
</details>
