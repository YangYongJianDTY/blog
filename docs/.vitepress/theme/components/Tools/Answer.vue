<script setup>
import { ref, computed, unref } from "vue";

const textValue = ref("");
const answerList = computed(() => {
  const res = unref(textValue);
  console.log(res);
  if (res) {
    try {
      const resJson = JSON.parse(res);

      const list = resJson.data.map((qes) => {
        const items = qes.questionItems.filter((item) => item.rightAnswer === true).map((a) => a.identifier);

        return {
          content: qes.content,
          answer: items.join("、"),
        };
      });
      return list;
    } catch (e) {
      console.log(e);
    }
  }
  return [];
});
</script>

<template>
  <div p-20 flex>
    <div flex-1>
      <el-input
        v-model="textValue"
        :autosize="{ minRows: 10, maxRows: 20 }"
        type="textarea"
        placeholder="Please input"
        w-full
      />
    </div>
    <div w-100 ml-10 border-1 border-gray-200 rounded-sm px-5>
      <div v-for="(item, index) in answerList" mb-3>
        <div>{{ index + 1 }}、{{ item.content }}</div>
        <div>答案：{{ item.answer }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
