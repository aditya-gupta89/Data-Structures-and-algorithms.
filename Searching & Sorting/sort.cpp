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

void insertionSort(int arr[], int n)
{
    for (int i = 1; i < n; i++)
    {
        for (int j = i - 1; j >= 0; j--)
        {
            if (arr[j] > arr[j + 1])
            {
                int tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
            else
                break;
        }
    }

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}

void bubbleSort(int arr[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                int tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}

int main()
{
    int arr[] = {4, 3, 44, 23, 12, 64, 2};
    bubbleSort(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}