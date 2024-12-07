package com.example.exotiscanapp.ui.onboarding.screen

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.fragment.app.Fragment
import androidx.viewpager2.widget.ViewPager2
import com.example.exotiscanapp.R
import com.example.exotiscanapp.databinding.FragmentSecondScreenBinding

class SecondFragmentScreen : Fragment() {
    private lateinit var binding: FragmentSecondScreenBinding
    private val CAMERA_PERMISSION_REQUEST_CODE = 100

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentSecondScreenBinding.inflate(inflater, container, false)
        val view = activity?.findViewById<ViewPager2>(R.id.viewPager2)

        binding.swipeNextPage.setOnClickListener {
            // Mengecek izin kamera sebelum melanjutkan ke halaman berikutnya
            if (isCameraPermissionGranted()) {
                // Jika izin kamera sudah diberikan, lanjutkan ke ThirdFragmentScreen
                view?.currentItem = 2
            } else {
                // Jika izin kamera belum diberikan, minta izin
                requestCameraPermission()
            }
        }
        return binding.root
    }

    // Fungsi untuk mengecek apakah izin kamera sudah diberikan
    private fun isCameraPermissionGranted(): Boolean {
        return ContextCompat.checkSelfPermission(
            requireContext(),
            Manifest.permission.CAMERA
        ) == PackageManager.PERMISSION_GRANTED
    }

    // Fungsi untuk meminta izin kamera
    private fun requestCameraPermission() {
        if (ActivityCompat.shouldShowRequestPermissionRationale(requireActivity(), Manifest.permission.CAMERA)) {
            Toast.makeText(requireContext(), "Kamera diperlukan untuk melanjutkan", Toast.LENGTH_SHORT).show()
        }
        ActivityCompat.requestPermissions(
            requireActivity(),
            arrayOf(Manifest.permission.CAMERA),
            CAMERA_PERMISSION_REQUEST_CODE
        )
    }

    // Menangani hasil dari permintaan izin
    @Deprecated("Deprecated in Java")
    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == CAMERA_PERMISSION_REQUEST_CODE) {
            if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // Izin diberikan, navigasi ke ThirdFragmentScreen
                val view = activity?.findViewById<ViewPager2>(R.id.viewPager2)
                view?.currentItem = 2
            } else {
                // Izin ditolak
                Toast.makeText(requireContext(), "Izin kamera diperlukan untuk melanjutkan", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
