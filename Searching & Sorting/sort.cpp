#include <bits/stdc++.h>
using namespace std;

void selectionSort(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        int index = i;
        for (int j = i + 1; j < n; j++)
            if (arr[index] > arr[j])
                index = j;
        int temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}

int main()
{
    int arr[] = {4, 3, 44, 23, 12, 64, 2};
    selectionSort(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}