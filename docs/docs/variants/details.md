<script setup>
const example1Html = `<!-- Secondary -->
<details>
  <summary role="button" class="secondary">Secondary</summary>
  <p>Ostriches are the largest birds in the world and are native to Africa. They have long, powerful legs that they use to run at high speeds, and they can reach up to 45 miles per hour. An ostrich's eye is bigger than its brain, which is unusual for birds.</p>
</details>

<!-- Contrast -->
<details>
  <summary role="button" class="contrast">Contrast</summary>
  <p>Koalas are arboreal marsupials that are native to Australia. They are known for their cute and cuddly appearance, but they can be quite aggressive if provoked. The fingerprints of koalas are so similar to those of humans that they have been mistaken for crime scene prints.</p>
</details>

<!-- Primary ghost -->
<details>
  <summary role="button" class="ghost">Primary ghost</summary>
  <p>Elephants are the largest land animals and highly intelligent with intricate communication systems. They use infrasonic sounds to talk and have long memories. They create and maintain habitats for other species, and can eat up to 300 pounds of vegetation per day. Their elongated incisor teeth, called tusks, serve various purposes, including digging and defense.</p>
</details>

<!-- Secondary ghost -->
<details>
  <summary role="button" class="ghost secondary">Secondary ghost</summary>
  <p>Crows are intelligent birds that are known for their problem-solving abilities. A group of crows is called a murder, and these birds have a reputation for being mischievous and sometimes even aggressive. Despite their negative image in some cultures, crows are important for their role in controlling pest populations and maintaining ecological balance.</p>
</details>

<!-- Contrast ghost -->
<details>
  <summary role="button" class="ghost contrast">Contrast ghost</summary>
  <p>Penguins are flightless birds with a tuxedo-like appearance. They swim well and can hold their breath for up to 20 minutes. Penguins are social, forming tight-knit communities, and some mate for life. They have adaptations to survive in cold climates, including thick feathers and a layer of fat for insulation.</p>
</details>
`;
</script>

# Accordion Variants

Like regular buttons, accordion summaries with `role="button"` support `.secondary`, `.contrast`, and `.ghost` styles.

<HtmlPreviewer :code="example1Html" />
