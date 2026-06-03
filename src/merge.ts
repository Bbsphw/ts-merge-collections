/**
 * รวมอาเรย์ตัวเลขจำนวนเต็ม 3 ตัวเข้าด้วยกันเป็นอาเรย์เดียวที่เรียงลำดับแล้ว
 * 
 * @param collection_1 - อาเรย์ที่เรียงลำดับจากน้อยไปมาก (Ascending)
 * @param collection_2 - อาเรย์ที่เรียงลำดับจากมากไปน้อย (Descending)
 * @param collection_3 - อาเรย์ที่เรียงลำดับจากน้อยไปมาก (Ascending)
 * @returns อาเรย์ใหม่ที่รวมข้อมูลทั้งหมดและเรียงลำดับจากน้อยไปมาก
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];
  
  let i = 0; // ตัวชี้ (Pointer) สำหรับ collection_1 (เรียงจากน้อยไปมาก)
  let j = collection_2.length - 1; // ตัวชี้ (Pointer) สำหรับ collection_2 (เรียงจากมากไปน้อย โดยอ่านจากท้ายสุดย้อนกลับมาเพื่อให้ได้ค่าน้อยไปหามาก)
  let k = 0; // ตัวชี้ (Pointer) สำหรับ collection_3 (เรียงจากน้อยไปมาก)

  while (i < collection_1.length || j >= 0 || k < collection_3.length) {
    // ดึงค่าปัจจุบัน หรือใช้ Infinity หากตัวชี้ชี้เลยขอบเขตของอาเรย์แล้ว
    const val1 = i < collection_1.length ? collection_1[i] : Infinity;
    const val2 = j >= 0 ? collection_2[j] : Infinity;
    const val3 = k < collection_3.length ? collection_3[k] : Infinity;

    // หาค่าน้อยที่สุดจากทั้งสามค่า
    let minVal = val1;
    let minSource = 1;

    if (val2 < minVal) {
      minVal = val2;
      minSource = 2;
    }

    if (val3 < minVal) {
      minVal = val3;
      minSource = 3;
    }

    // ใส่ค่าน้อยที่สุดลงในผลลัพธ์
    result.push(minVal);

    // เลื่อนตำแหน่งตัวชี้ที่เกี่ยวข้องไปข้างหน้า (หรือถอยหลังสำหรับ collection_2)
    if (minSource === 1) {
      i++;
    } else if (minSource === 2) {
      j--;
    } else {
      k++;
    }
  }

  return result;
}
